import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useGetUserUseCaseStore } from '@/presentation/store/infraestructure/user-store';

const Post = () => {
  const { id: userId } = useParams<{ id: string }>();
  const getUserUseCase = useGetUserUseCaseStore(state => state.getUserUseCase);

  useEffect(() => {
    if (!userId) return;
    getUserUseCase.execute(userId);
  }, [getUserUseCase, userId]);

  return <div>Dashboard</div>;
};

export default Post;
