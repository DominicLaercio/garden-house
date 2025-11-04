type CardProps = {
  image: string;
  title: string;
  description: string;
};

function Card({ image, title, description }: CardProps) {
    return (
        <div className="
        w-50
        h-75
        rounded-2xl
        cursor-pointer">
            <div
            className={
            `relative
            bg-cover
            bg-center
            w-full
            h-full
            rounded-2xl
            justify-center
            flex-col
            text-center
            bottom-0
            border-black
            border
            hover:border-white
            transition`}
            style={{ backgroundImage: `url("${image}")` }}>
                <div className="
                bg-black/[.60]
                text-white
                text-shadow-black
                text-shadow-lg
                p-2
                px-5
                pb-5
                h-fit
                w-full
                absolute
                bottom-3">
                    <h2 className="text-lg/[.90]">{title}</h2>
                    <br />
                    <p className="text-xs/[.90] font-light">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;