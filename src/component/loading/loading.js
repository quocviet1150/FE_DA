import './loading.css';
const Loading = ({ isLoading }) => {

    if (!isLoading) return null;

    return (
        <div className="center-container">
            <div class="loader"></div>
        </div>
    )
}

export default Loading;