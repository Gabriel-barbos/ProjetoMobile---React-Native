import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  CelsiusToFahrenheit: undefined;
  KmToMp: undefined;
  AgeCalculator: undefined
};

export type Props = NativeStackScreenProps<RootStackParamList, 'CelsiusToFahrenheit'>;
