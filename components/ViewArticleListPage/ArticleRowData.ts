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
  createData(
    'Mercy Relief holds inauguration for whomever whoever Mercy Relief holds inauguration for whomever whoever',
    '1sda',
    'dsfsd',
    'Done'
  ),
  createData('What can we do to sfgreghtrgtegerge', '1sda', 'dsfsd', 'Done'),
  createData('one', '1sda', 'dsfsd', 'Done'),
  createData('two', '1sda', 'dsfsd', 'Done'),
  createData('three', '1sda', 'dsfsd', 'Done'),
  createData('four', '1sda', 'dsfsd', 'Done'),
  createData('five', '1sda', 'dsfsd', 'Done'),
  createData('six', '1sda', 'dsfsd', 'Done'),
  createData('seven', '1sda', 'dsfsd', 'Done'),
  createData('eight', '1sda', 'dsfsd', 'Done'),
  createData('nine', '1sda', 'dsfsd', 'Done'),
  createData('ten', '1sda', 'dsfsd', 'Done'),
]
