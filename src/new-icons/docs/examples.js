import { colors, sizes } from './constants';

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
