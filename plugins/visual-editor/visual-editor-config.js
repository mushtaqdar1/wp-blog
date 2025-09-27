export const POPUP_STYLES = `
#inline-editor-popup {
  position: fixed;
  z-index: 10000;
  background: #fff;
  border: 1px solid #357DF9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(53, 125, 249, 0.15);
  padding: 16px;
  min-width: 200px;
  font-family: inherit;
}
#inline-editor-popup input,
#inline-editor-popup textarea {
  width: 100%;
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
#inline-editor-popup button {
  background: #357DF9;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
}
#inline-editor-popup button:hover {
  background: #285bb5;
}
`;
