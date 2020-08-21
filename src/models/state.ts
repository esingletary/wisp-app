export interface WispEditorState {
  wispContents: string,
  wispPassword: string,
  isConfirmDialogOpen: boolean,
  isCurrentlyLoading: boolean,
  encryptedWispId: string
}

export interface WispRetrieverState {
  wispId: string,
  wispPassword: string,
  wispContents: string,
  isCurrentlyLoading: boolean,
}