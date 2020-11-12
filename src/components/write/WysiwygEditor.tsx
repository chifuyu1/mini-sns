import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type EditorProps = {
  content: string;
  onContent: (text: string) => void;
};

function WysiwygEditor({ content, onContent }: EditorProps) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'underline', 'strike'],
      [
        // { list: 'ordered' },
        // { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      // ['link'],
      ['image', 'video'],
      // ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    // 'italic',
    'underline',
    'strike',
    // 'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ];

  return (
    <div className="text-editor">
      <ReactQuill
        style={{ marginBottom: 0 }}
        // theme="snow"
        modules={modules}
        formats={formats}
        placeholder="글 내용을 작성하세요."
        value={content}
        onChange={onContent}
      />
    </div>
  );
}

export default React.memo(WysiwygEditor);
