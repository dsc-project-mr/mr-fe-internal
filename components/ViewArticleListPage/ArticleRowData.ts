export interface Data {
  name: string
  date_created: string
  last_modified: string
  status: string
}

function createData(
  name: string,
  date_created: string,
  last_modified: string,
  status: string
): Data {
  return {
    name,
    date_created,
    last_modified,
    status,
  }
}

export const rows = [
  createData('Mercy Relief Continues', '1sda', 'dsfsd', 'Done'),
  createData('Mercy Relief holds inauguration', '1sda', 'dsfsd', 'Done'),
  createData('What can we do to sfgreghtrgtegerge', '1sda', 'dsfsd', 'Done'),
  createData('fdasfs', '1sda', 'dsfsd', 'Done'),
  createData('dfsaf', '1sda', 'dsfsd', 'Done'),
  createData('fdsafds', '1sda', 'dsfsd', 'Done'),
  createData('fdsf3wr', '1sda', 'dsfsd', 'Done'),
]
