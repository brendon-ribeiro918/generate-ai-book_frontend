
import React, { useEffect, useState } from "react";
import { useForm } from '@mantine/form';
import { TextInput, Textarea, NumberInput, Button, Box, Code, Select, TypographyStylesProvider } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import { InputField } from "components/InputField";
import { GenreFields } from "components/GenreFields";
import { checkStatusApi, generateBookApi } from "utils/apiUtils";
import { options, initialValues } from "constants"

export default function HomePage() {

  const [submittedValues, setSubmittedValues] = useState('');
  const [genre, setGenre] = useState('');
  const [story, setStory] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (values) => {
    setStory("");
    setIsLoading(true);
    setSubmittedValues(JSON.stringify(values, null, 2));
  }

  const form = useForm({
    initialValues: initialValues,

    transformValues: (values) => ({
      kind_of_book: values.kind_of_book || "",
      amount_of_chapters: Number(values.amount_of_chapters) || 0,
      book_title: values.book_title || "",
      genre: values.genre || "",
      tone: values.tone || "",
      primary_characters: values.primary_characters || "",
      motivation_for_each_characters: values.motivation_for_each_characters || "",
      challenges_in_story: values.challenges_in_story || "",
      plot_notes: values.plot_notes || "",
      nonfiction_tone: values.nonfiction_tone || "",
      themes: values.themes || "",
      subtopics_to_address: values.subtopics_to_address || "",
      key_insights: values.key_insights || "",
    }),
  });

  useEffect(()=>{
    checkStatusApi();
    if(submittedValues) generateBookApi(submittedValues, setStory);
  }, [submittedValues])

  useEffect(()=>{
   if(story) {
      setIsLoading(false);
    }
  }, [story])

  return (
    <main>
      <Box maw={"60%"} mx="auto">
        <form
          onSubmit={form.onSubmit((values) => onSubmit(values))}
        >
          <TypographyStylesProvider>
            <InputField label="What kind of book would you like to create?">
              <Textarea
                placeholder="Kind of book"
                autosize
                minRows={4}
                maxRows={4}
                className="w-[100%]"
                {...form.getInputProps('kind_of_book')}
              />
            </InputField>

            <InputField label="How many chapters would you like the book to have?">
              <NumberInput {...form.getInputProps('amount_of_chapters')} placeholder="Amount of chapters" className="w-[100%]"/>
            </InputField>

            <InputField label="Please provide your Book Title:">
              <TextInput {...form.getInputProps('book_title')} placeholder="Book title" />
            </InputField>

            <InputField label="Select Genre:">
              <Select
                data={options}
                placeholder="Select Genre"
                searchable
                nothingFoundMessage="Nothing found..."
                {...form.getInputProps('genre')}
                onSelect={(e) => setGenre(e.target.value)}
              />
            </InputField>

            {genre === 'Fiction' && (
              <GenreFields form={form} prefix="fiction_" />
            )}

            {(genre === 'Non-fiction' || genre === 'Academic') && (
              <GenreFields form={form} prefix="nonfiction_"/>
            )}
            <Box maw={"80%"} mx="auto" className="mt-[120px]">
              <Button loading={isLoading} fullWidth size="lg" color="blue" type="submit" mt="lg" className="w-[20%]" rightSection={<IconDownload size={17} disabled={isLoading} variant="outline" type="submit"/>}>
                Generate
              </Button>
            </Box>
          </TypographyStylesProvider>
        </form>
        {story && <Code mt="xl" mb="xl" maw={"100%"} style={{whiteSpace: 'break-spaces'}} block>{story}</Code>}
      </Box>
    </main>
  );
}
  