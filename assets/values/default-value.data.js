export default {
  load() {
    return {
      value: `
<h3>Insert image</h3>
<p>You have three ways to add images:</p>
<ol start="1"><li>Click the <code>Image</code> icon in the toolbar above to select and upload an image from your device.</li></ol>
<ol start="2"><li>Copy an image to your clipboard and paste it directly into your editor.</li></ol>
<ol start="3"><li>Start a line with <code>/</code> to display a popup menu. Select the <code>Image</code> option to upload an image.</li></ol>
<p><br /></p>
<p><lake-box type="inline" name="image" value="eyJ1cmwiOiIuLi9hc3NldHMvaW1hZ2VzL2hlYXZlbi1sYWtlLTUxMi5wbmciLCJzdGF0dXMiOiJkb25lIiwibmFtZSI6ImhlYXZlbi1sYWtlLTUxMi5wbmciLCJzaXplIjo2MDAwOCwidHlwZSI6ImltYWdlL2pwZWciLCJsYXN0TW9kaWZpZWQiOjE3MTAyMjk1MTcxOTgsIndpZHRoIjo1MTIsImhlaWdodCI6MzcwLCJvcmlnaW5hbFdpZHRoIjo1MTIsIm9yaWdpbmFsSGVpZ2h0IjozNzAsImNhcHRpb24iOiJPdmVyaGVhZCBwYW5vcmFtYSBvZiBIZWF2ZW4gTGFrZS4ifQ=="></lake-box></p>
<p>You might be wondering about the name. Lake actually refers to <a href="https://en.wikipedia.org/wiki/Heaven_Lake">Heaven Lake</a>, a volcanic crater lake renowned for its stunning beauty and cultural significance.</p>

<p><br /></p>
<lake-box type="block" name="hr"></lake-box>
<p><br /></p>

<h3>Markdown-style shortcuts</h3>
<p>Lake provides markdown-style handy shortcuts that you can use to format the content. The table below lists some commonly used shortcuts. For all shortcut definitions, refer to the <a href="https://lakejs.org/guide/markdown">Markdown shortcuts</a> page.</p>
<table>
  <tr>
    <td style="background-color: #0000000a;"><p style="text-align: center;"><strong>Format type</strong></p></td>
    <td style="background-color: #0000000a;"><p style="text-align: center;"><strong>Character and key</strong></p></td>
  </tr>
  <tr>
    <td>Heading 1</td>
    <td><code>#</code> <code>Space</code></td>
  </tr>
  <tr>
    <td>Heading 3</td>
    <td><code>###</code> <code>Space</code></td>
  </tr>
  <tr>
    <td>Numbered list</td>
    <td><code>1.</code> <code>Space</code></td>
  </tr>
  <tr>
    <td>Bulleted list</td>
    <td><code>*</code> <code>Space</code></td>
  </tr>
  <tr>
    <td>Checklist</td>
    <td><code>[]</code> <code>Space</code></td>
  </tr>
  <tr>
    <td>Block quotation</td>
    <td><code>&gt;</code> <code>Space</code></td>
  </tr>
  <tr>
    <td>Inline code</td>
    <td><code>\`code\`</code> <code>Space</code></td>
  </tr>
  <tr>
    <td>Thematic break</td>
    <td><code>---</code> <code>Enter</code></td>
  </tr>
  <tr>
    <td>Code block</td>
    <td><code>\`\`\`</code> <code>Enter</code></td>
  </tr>
</table>

<p><br /></p>
<lake-box type="block" name="hr"></lake-box>
<p><br /></p>

<h3>Checklist</h3>
<p>You have three ways to create checklist:</p>
<ul type="checklist"><li value="true">Click the <code>Checklist</code> icon in the toolbar above.</li></ul>
<ul type="checklist"><li value="true">Start a line with <code>[]</code> or <code>[x]</code> followed by a space.</li></ul>
<ul type="checklist"><li value="false">Start a line with <code>/</code> to display a popup menu. Type <code>c</code> and select the <code>Checklist</code> option.</li></ul>

<p><br /></p>
<lake-box type="block" name="hr"></lake-box>
<p><br /></p>

<h3>Insert file</h3>
<p><lake-box type="inline" name="file" value="eyJ1cmwiOiIuLi9hc3NldHMvZmlsZXMvdGhpbmstZGlmZmVyZW50LXdpa2lwZWRpYS5wZGYiLCJzdGF0dXMiOiJkb25lIiwibmFtZSI6IlRoaW5rIGRpZmZlcmVudCAtIFdpa2lwZWRpYS5wZGYiLCJzaXplIjo1MTA1NTgsInR5cGUiOiJhcHBsaWNhdGlvbi9wZGYiLCJsYXN0TW9kaWZpZWQiOjE3NDAwOTc3MTg1OTh9"></lake-box></p>

<p><br /></p>
<lake-box type="block" name="hr"></lake-box>
<p><br /></p>

<h3>Code block</h3>
<lake-box type="block" name="codeBlock" value="eyJsYW5nIjoiamF2YXNjcmlwdCIsImNvZGUiOiJpbXBvcnQgJ2xha2VsaWIvbGliL2xha2UuY3NzJztcbmltcG9ydCB7IEVkaXRvciwgVG9vbGJhciB9IGZyb20gJ2xha2VsaWInO1xuXG5jb25zdCB0b29sYmFyID0gbmV3IFRvb2xiYXIoe1xuICByb290OiAnLm15LXRvb2xiYXInLFxufSk7XG5jb25zdCBlZGl0b3IgPSBuZXcgRWRpdG9yKHtcbiAgcm9vdDogJy5teS1jb250ZW50JyxcbiAgdG9vbGJhcixcbn0pO1xuZWRpdG9yLnJlbmRlcigpOyJ9"></lake-box>

<p><br /></p>
<lake-box type="block" name="hr"></lake-box>
<p><br /></p>

<h3>Mathematical formula</h3>
<ul>
  <li>Difference of squares: <lake-box type="inline" name="equation" value="eyJjb2RlIjoiYV4yLWJeMj0oYStiKShhLWIpIn0="></lake-box></li>
  <li>Difference of cubes: <lake-box type="inline" name="equation" value="eyJjb2RlIjoiYV4zLWJeMz0oYS1iKShhXjIrYWIrYl4yKSJ9"></lake-box></li>
</ul>

<p><br /></p>
<lake-box type="block" name="hr"></lake-box>
<p><br /></p>

<h3>Mention</h3>
<p>Type <code>@</code> to display a popup menu containing specified users. You can search for users by typing <code>@keyword</code>.</p>

<p><br /></p>
<lake-box type="block" name="hr"></lake-box>
<p><br /></p>

<h3>Alerts</h3>
<p>You can start a line with <code>:::info</code>, <code>:::tip</code>, <code>:::warning</code>, or <code>:::danger</code> followed by an enter to create an alert. You can also type <code>/</code> to select an alert in the popup menu.</p>
<blockquote type="info">Useful information that users should know, even when skimming content.</blockquote>
<blockquote type="tip">Helpful advice for doing things better or more easily.</blockquote>
<blockquote type="warning">Urgent info that needs immediate user attention to avoid problems.</blockquote>
<blockquote type="danger">Advises about risks or negative outcomes of certain actions.</blockquote>
<p><br /></p>

<p><br /></p>
<lake-box type="block" name="hr"></lake-box>
<p><br /></p>

<h3>YouTube video</h3>
<p><lake-box type="inline" name="video" value="eyJ1cmwiOiJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTVzTUJoRHY0c2lrIn0="></lake-box></p>

<p><br /></p>
<lake-box type="block" name="hr"></lake-box>
<p><br /></p>

<h3>X (Tweet)</h3>
<p><lake-box type="inline" name="twitter" value="eyJ1cmwiOiJodHRwczovL3guY29tL1N1cHBvcnQvc3RhdHVzLzExNDEwMzk4NDE5OTMzNTUyNjQifQ=="></lake-box></p>
<p><br /></p>

`
    }
  }
}
