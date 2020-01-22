export interface VolumeControlProps {
  volume: number;
  vertical?: boolean;
  onChange: (volume: number) => void;
}
