export interface WispEditorProps {
  isLoading: boolean,
  isCurrentlyLoading: (isLoading: boolean) => void
}

export interface WispConfirmCreateDialogProps {
  open: boolean,
  wispId: string,
  setOpen: (state: boolean) => void,
  onClose: () => void,
}