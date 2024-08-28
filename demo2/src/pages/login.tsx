import axios from 'axios';
import { useClientLoaderData } from 'umi';

const Users = () => {
  // 1. 并行数据
  const { data } = useClientLoaderData();
  console.log('🍎并行 data =>', data);

  // 2. 串行数据
  const loadData = async () => {
    const res = await clientLoader();
    console.log('🥒 串行 res=>', res);
  };
  loadData();

  return (
    <div>
      <p>cats-{data?.data}</p>
    </div>
  );
};

export default Users;

// 数据加载
export async function clientLoader() {
  let data;
  try {
    data = await axios.get('/api/cats');
  } catch (e) {}
  return data;
}
