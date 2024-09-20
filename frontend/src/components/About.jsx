const About = () => {
  return (
    <section className="bg-gray-900 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-500 mb-4">
            KodeKalp Global Technologies
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            <span className="font-semibold text-gray-200">
              We are a full-service digital marketing and software development
              agency, helping businesses of all sizes achieve their online
              goals.
            </span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between text-center lg:text-left">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-4">
              Our History
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-purple-400">
              <span className="font-semibold">
                Founded in 2024, <br /> KodeKalp has grown from a small team{" "}
                <br /> of passionate developers into a dynamic leader <br /> in
                technology solutions, dedicated to innovation and quality.
              </span>
            </p>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-4">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-purple-400">
              <span className="font-semibold">
                Our Mission is <br /> to empower businesses with cutting-edge{" "}
                <br /> technology solutions, <br />
                ensuring customer satisfaction and sustainable growth.
              </span>
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-4">
            Our Values
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-purple-400 mb-6">
            <span className="font-semibold">
              We value integrity, innovation, <br /> quality, a customer-centric
              approach, collaboration, <br /> and commitment in everything we
              do.
            </span>
          </p>
          <a
            href="/about"
            className="inline-block bg-purple-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-purple-700 transition mt-5"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
