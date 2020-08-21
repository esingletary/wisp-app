export interface WispEditorState {
  wispContents: string,
  wispPassword: string,
  isConfirmDialogOpen: boolean,
  isCurrentlyLoading: boolean,
  encryptedWispId: string
}