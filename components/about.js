import Head from 'next/head';
import Image from 'next/image';
import Team from './team';

const About = () => {
  return (
    <>
      {/* <Head>
        <title>About Us | Utkristi AI Labs</title>
        <meta name="description" content="Learn more about our Utkristi AI Labs, our mission, and our team." />
      </Head> */}
      <main className="w-full bg-black min-h-screen p-0 max-w-screen-2xl">
        <div className="py-12 px-4 md:px-6 lg:px-8">
          <section className="text-center">
            <h1 className="text-4xl font-extrabold gradient-title mb-4">About Us</h1>
            <p className="text-lg text-gray-200 mb-8 sm:p-6">
              We are a cutting-edge AI Labs dedicated to revolutionizing the industry with innovative solutions.
              Our team of experts is passionate about leveraging artificial intelligence to create impactful and
              transformative technologies.
            </p>
        <div className="bg-yellow-600 gap-16 items-center py-7 rounded p-1 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-10 lg:px-6">
            <div className=" font-light text-gray-500 sm:text-lg dark:text-gray-200 px-3">
              <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
                We didn't reinvent the wheel
              </h2>
              <p className="mb-4">
                We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.
              </p>
              <p>
                We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="relative mt-4 w-full rounded-lg p-2">
              <Image
                src="/office-image-1.png"
                alt="office content 1"
                layout="responsive"
                width={typeof window !== 'undefined' && window.innerWidth > 700 ? 600 : 250}
                height={400}
                className="rounded-lg"
              />

              </div>
              <div className="relative hidden sm:grid mt-4 lg:mt-10 w-full rounded-lg">
              <Image
                src="/office-image-2.png"
                alt="office content 2"
                layout="responsive"
                width={typeof window !== 'undefined' && window.innerWidth > 700 ? 600 : 250}
                height={400}
                className="rounded-lg"
              />
              </div>
            </div>
        </div>
          </section>

          <section className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-yellow-600 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-8">
              Our mission is to harness the power of AI to solve real-world problems and make technology more accessible
              and useful for everyone. We are committed to pushing the boundaries of innovation and ensuring that our
              solutions have a positive impact on society.
            </p>
          </section>

          <section className="mt-12 text-center bg-yellow-600 rounded p-4 max-w-screen-xl mx-auto items-center">
            <h2 className="text-3xl font-bold text-white mb-6">Meet the Team</h2>
                <Team/>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
