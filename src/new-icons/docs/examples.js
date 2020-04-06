import { colors } from './constants';

export const colorsExample = `<Layout>
                        <Cell>
                          <Layout justifyItems="center" cols="4">
                              <Box  direction="vertical" align="center">
                                 <Duplicate style={{ color: '${colors.standard}' }} /><Text>Standard</Text>
                              </Box>
                              <Box  direction="vertical" align="center">
                               <Duplicate style={{ color: '${colors.dark}' }} /><Text>Dark</Text>
                              </Box>
                              <Box  direction="vertical" align="center">
                               <Duplicate style={{ color: '${colors.destructive}' }} /><Text>Destructive</Text>
                              </Box>
                              <Box  direction="vertical" align="center" >
                                <Box backgroundColor="D10">
                                  <Duplicate style={{ color: '${colors.light}' }} />
                                </Box>
                                  <Text>Light</Text>
                            </Box>
                           </Layout>
                        </Cell>
                        <Cell>
                          <Layout justifyItems="center" cols="4">
                            <Box  direction="vertical" align="center">
                               <Duplicate style={{ color: '${colors.disabled}' }} /><Text>Disabled</Text>
                            </Box>
                            <Box  direction="vertical" align="center">
                               <Duplicate style={{ color: '${colors.premium}' }} /><Text>Premium</Text>
                            </Box>
                            <Box  direction="vertical" align="center">
                               <Duplicate style={{ color: '${colors.success}' }} /><Text>Success</Text>
                            </Box>
                           </Layout>
                        </Cell>
            </Layout>`;

export const sizesExample = `<Layout cols="3">
                        <Duplicate size="24px" />
                        <Duplicate size="48px" />
                        <Duplicate size="72px" />
                    </Layout>
                   `;

export const RTL_LTR_Example = ` <Layout cols="2">
  <Duplicate />
 <Duplicate style={{ transform: 'scaleX(-1)'}} />
</Layout>`;

export const usageExample = `<Layout>
<Cell>
  <Layout cols="4">
    <Text>Icon Prefix</Text>
    <Button prefixIcon={<Icons.Edit />}>Edit Item</Button>
    <Button prefixIcon={<Icons.Edit />} priority="secondary">Edit Item</Button>
  </Layout>
</Cell>
<Cell>
  <Layout cols="4">
   <Text>Icon Suffix</Text>
    <Button suffixIcon={<Icons.ChevronDownSmall />}>Actions</Button>
    <Button suffixIcon={<Icons.ChevronDownSmall />} priority="secondary">Edit Item</Button>
  </Layout>
</Cell>
<Cell>
  <Layout cols="4">
    <Text>Icon Only</Text>
    <IconButton><Icons.More /></IconButton>
    <IconButton priority="secondary"><Icons.More /></IconButton>
  </Layout>
</Cell>
<Cell>
  <Layout cols="4">
     <Text>Text Button</Text>
     <TextButton prefixIcon={<Icons.Add/>}>Add Item</TextButton>
     <TextButton suffixIcon={<Icons.ChevronDownSmall />}>Actions</TextButton>
  </Layout>
</Cell>
<Cell>
  <Layout cols="4">
    <Text>Inputs</Text>
    <FormField label="Date:">
        <Input
      value="Aug 29, 2006"
      prefix={
        <Input.IconAffix>
          <Icons.Date />
        </Input.IconAffix>
      }
    />
    </FormField>
  </Layout>
</Cell>
</Layout>`;
