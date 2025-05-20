// Creates a progress bar which lets us visually rate something.
import PropTypes from 'prop-types';

//--------------------------------------------------------
export default function ProgressBar({
    label,
    rating,
    color,
    height = '10px',
    backgroundColor = '#e0e0e0',
}) {
    return (
        <div className="progress-bar-wrapper">
            {label && <span className="progress-bar-label">{label}</span>}
            <div className="progress-bar-container">
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={Math.min(Math.max(rating, 0), 100)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={`${label || 'Progress'}: ${rating}%`}
                >
                    <div
                        className={`progress-bar-filled ${color}`}
                        style={{
                            height: '100%',
                            width: `${Math.min(Math.max(rating, 0), 100)}%`,
                            backgroundColor: color,
                            transition: 'all 0.3s ease-in-out',
                        }}
                    ></div>
                </div>
                <div
                    className="progress-bar-rating"
                    style={{
                        fontSize: '16px',
                        textAlign: 'right',
                    }}
                >
                    {rating}%
                </div>
            </div>
        </div>
    );
}

ProgressBar.propTypes = {
    label: PropTypes.string,
    rating: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    height: PropTypes.string,
    backgroundColor: PropTypes.string,
};
