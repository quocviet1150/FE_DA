import { useLoading } from './LoadingProvider';
import './loading.css';

const Loading = () => {
    const { loading } = useLoading();

    if (!loading) return null;

    return (
        <div className="center-container">
            <div class="loader"></div>
        </div>
    )
}

export default Loading;