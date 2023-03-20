import React from 'react'

interface IMarkdownRendererProps {
   markdown: string
}

const parseMarkdown = (markdown: string): string => {
   let html = markdown
   html = html.replace(/^# (.+)/gm, '<h1>$1</h1>')
   html = html.replace(/^## (.+)/gm, '<h2>$1</h2>')
   html = html.replace(/^### (.+)/gm, '<h3>$1</h3>')
   html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
   html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')
   html = html.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>')
   html = html.replace(/```([\s\S]*?)```/g, '<pre>$1</pre>')
   html = html.replace(/`([^`]+)`/g, '<code>$1</code>')
   html = html.replace(/\n\n/gm, '</p><p>')
   html = `<p>${html}</p>`
   return html
}

const MarkdownRenderer: React.FC<IMarkdownRendererProps> = ({markdown}) => {
   const renderedMarkdown = parseMarkdown(markdown)
   return <div>{renderedMarkdown}</div>
}

export default MarkdownRenderer
