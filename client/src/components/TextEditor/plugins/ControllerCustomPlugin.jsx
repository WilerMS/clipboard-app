import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { useEffect } from "react"
import { useNotesContext } from "../../../context/notes.context"

export default function ControllerCustomPlugin() {
  const [editor] = useLexicalComposerContext()
  const { notes, setNotes } = useNotesContext()

  useEffect(() => {
    const editorState = editor.parseEditorState(notes)
    editor.setEditorState(editorState)

    editor.registerUpdateListener(({editorState}) => {
      setNotes(editorState.toJSON())
    })
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return null
}
