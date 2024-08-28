import styles from './index.less';
export default function () {
  console.log('process.env.NAME>>>', process.env.NAME);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Hello World</div>
    </div>
  );
}
