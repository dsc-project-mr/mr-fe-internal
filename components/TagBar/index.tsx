import { useEffect, useState } from 'react'

const tagItem = {
  backgroundColor: 'rgb(218, 216, 216)',
  display: 'inline-block',
  padding: '0.5em 0.75em',
  borderRadius: '5px',
}

const tagInput = {
  backgroundColor: 'transparent',
  flexGrow: 1,
  padding: '0.5em 0',
  border: 'none',
  outline: 'none',
  fontSize: '16px',
  width: '50px',
}

const tagContainer = {
  border: '2px solid #DDE2E5',
  flexWrap: 'wrap',
  padding: '0.5em',
  borderRadius: '3px',
  width: '100%',
  marginTop: '1em',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5em',
}

interface Props {
  onChange: (tags: string[]) => void
}

const TagBar = ({ onChange }: Props) => {
  const [tags, setTags] = useState(['Press Release'])
  useEffect(() => {
    onChange(tags)
  }, [tags, onChange])
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  function handleKeyDown(e: any) {
    if (e.code === 'Enter') {
      console.log('set tag')
      setTags([...tags, e.target.value])
      e.target.value = ''
    }
    if (e.code === 'Backspace' && e.target.value === '') {
      console.log('remove tag')
      setTags(tags.slice(0, -1))
    }
    if (!e.key.trim()) return
  }

  function removeTag(index: number) {
    setTags([...tags.slice(0, index), ...tags.slice(index + 1)])
  }
  return (
    <div style={tagContainer}>
      {tags.map((tags, index) => (
        <div style={tagItem} key={index}>
          <span className="text">{tags}</span>
          <span
            style={{ marginLeft: '5px' }}
            onClick={() => removeTag(index)}
            className="close"
          >
            &times;
          </span>
        </div>
      ))}
      <input
        onKeyDown={handleKeyDown}
        disabled={tags.length >= 6}
        type="text"
        style={tagInput}
        placeholder={
          tags.length >= 6
            ? ''
            : 'Include up to ' + (6 - { tags }.tags.length) + ' tag(s)'
        }
      />
    </div>
  )
}

export default TagBar
