import { useLoading } from './LoadingProvider';
import './loading.css';

const Loading = () => {
    const { loading } = useLoading();

    if (!loading) return null;

    return (
        <div class="spinner">
            <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div style={{ color: 'white' }}>Loading...</div>
        </div>
    )
}

export default Loading;