import { useLoading } from './LoadingProvider';
import './loading.css';

const Loading = () => {
    const { loading } = useLoading();

    if (!loading) return null;

    return (
        <div className="spinner">
            <div className="lds-roller">
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