
import { Flex } from '@mantine/core';

export function InputField({ label, children }) {
    return (
        <Flex
        direction={{ base: 'column', sm: 'row' }}
        justify={{ sm: 'space-between' }}
        align={{ sm: 'center' }}
        mt="md"
        >
            <p>{label}</p>
            <div className='w-[500px]'>
                {children}
            </div>
        </Flex>
    );
}