
import React from "react";
import { TextInput, Textarea, Box } from '@mantine/core';
import { InputField } from './InputField';

export function GenreFields({ form, prefix }) {
  return (
      <React.Fragment>
          {prefix === "fiction_" && (
            <Box maw={"100%"} mx="auto" mb="lg">
              <InputField label="Tone:">
                  <TextInput {...form.getInputProps('tone')} placeholder="Tone" />
              </InputField>
      
              <InputField label="Primary Characters:">
                  <TextInput {...form.getInputProps('primary_characters')} placeholder="Primary Characters" />
              </InputField>
      
              <InputField label="Motivation for each character:">
                  <Textarea
                      placeholder="Motivation for each character"
                      autosize
                      minRows={4}
                      maxRows={4}
                      {...form.getInputProps('motivation_for_each_characters')}
                  />
              </InputField>
      
              <InputField label="Challenges in Story:">
                  <Textarea
                      placeholder="Challenges in Story"
                      autosize
                      minRows={4}
                      maxRows={4}
                      {...form.getInputProps('challenges_in_story')}
                  />
              </InputField>
      
              <InputField label="Plot notes:">
                  <Textarea
                      placeholder="Plot notes"
                      autosize
                      minRows={4}
                      maxRows={4}
                      {...form.getInputProps('plot_notes')}
                  />
              </InputField>
            </Box>
          )}
          {prefix === "nonfiction_" && (
            <Box maw={"100%"} mx="auto" mb="lg">
              <InputField label="Tone:">
                <TextInput {...form.getInputProps('nonfiction_tone')} placeholder="Tone" />
              </InputField>
        
              <InputField label="What themes would you like:">
                <TextInput {...form.getInputProps('themes')} placeholder="Themes" />
              </InputField>
        
              <InputField label="Subtopics to address:">
                <Textarea
                  placeholder="Subtopics"
                  autosize
                  minRows={4}
                  maxRows={4}
                  {...form.getInputProps('subtopics_to_address')}
                />
              </InputField>
              
              <InputField label="Key insights/learnings for the reader:">
                <Textarea
                  placeholder="Key insights/learnings"
                  autosize
                  minRows={4}
                  maxRows={4}
                  {...form.getInputProps('key_insights')}
                />
              </InputField>
            </Box>
          )}
      </React.Fragment>
  );
}