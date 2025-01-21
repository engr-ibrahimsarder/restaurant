import { Parallax, Background } from 'react-parallax';

const CoverImage = ({title, bannerImg}) => {
  return (
    <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={bannerImg}
    bgImageAlt="the dog"
    strength={-200}
>
<div className="hero  h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-white">{title}</h1>
      <p className="py-6 text-white">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
  </div>
</div>
</Parallax>
  );
};

export default CoverImage;