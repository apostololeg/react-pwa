import { Theme, ThemeDefaults, Button } from '@foreverido/uilib';

// import 'stores';
import Logo from 'assets/logo.svg';
import S from './App.styl';

const colors = { active: '#ffb100' };
// @ts-ignore
const theme = ThemeDefaults.getConfig({ colors });

export default function App() {
  return (
    <div className={S.root}>
      <Theme config={theme} />
      <Button prefixElem={<Logo />}>I'm a button?</Button>
    </div>
  );
}
