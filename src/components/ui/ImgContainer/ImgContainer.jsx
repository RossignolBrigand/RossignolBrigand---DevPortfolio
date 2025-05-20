//-----------------------------------------

export default function ImgContainer({ src, alt, width, height, variant, loading }) {
	return (
		<div className={`img-container img-container__${variant}`}>
			<img
				src={src}
				alt={alt}
				loading={loading}
				style={{
					width: `${width}`,
					height: `${height}`,
				}}
			/>
		</div>
	);
}
