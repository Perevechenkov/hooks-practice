import Card from '../UI/Card/Card';
import classes from './Home.module.scss';

export default function Home(props) {
  return (
    <Card className={classes.home}>
      <h1>Welcome back</h1>
    </Card>
  );
}
