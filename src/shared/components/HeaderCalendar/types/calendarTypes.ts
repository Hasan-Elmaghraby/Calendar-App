export interface NavigationProps {
  onClickNext: () => void;
  onClickPrevious: () => void;
  onClickNow?: () => void;
}

export interface SliderControlsProps {
  onClickNext: () => void;
  onClickPrevious: () => void;
  onClickNow?: () => void;
  text: string;
}
