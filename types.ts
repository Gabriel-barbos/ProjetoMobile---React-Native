import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  CelsiusToFahrenheit: undefined;
  KmToMp: undefined;
  Invite: undefined;
  AgeCalculator: undefined;
  Lottery: undefined
};

export type Props = NativeStackScreenProps<RootStackParamList, 'CelsiusToFahrenheit'>;
