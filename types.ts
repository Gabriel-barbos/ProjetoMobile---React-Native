import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  CelsiusToFahrenheit: undefined;
  KmToMp: undefined;
  Invite: undefined;
  AgeCalculator: undefined;
  Lottery: undefined;
  Tabs: undefined;
  TextScreen: undefined;
  FoodMenu: undefined;
  Foods: undefined
};

export type Props = NativeStackScreenProps<RootStackParamList, 'CelsiusToFahrenheit'>;
