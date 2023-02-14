import { useEffect, useState } from 'react'
import type { Property } from 'csstype'

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
  flexWrap: 'wrap' as Property.FlexWrap,
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

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement
    if (e.code === 'Enter') {
      setTags((tags) => [...tags, target.value])
      target.value = ''
    }
    if (e.code === 'Backspace' && target.value === '') {
      setTags((tags) => tags.slice(0, -1))
    }
    if (!e.key.trim()) return
  }

  const removeTag = (index: number) => {
    setTags((tags) => [...tags.slice(0, index), ...tags.slice(index + 1)])
  }
  return (
    <div style={tagContainer}>
      {tags.map((tags, index) => (
        <div style={tagItem} key={index}>
          <span className="text">{tags}</span>
          <span
            style={{ marginLeft: '5px', cursor: 'pointer' }}
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
