//import { LogoIcon } from "./Icons";

export const LandingPageFooter = () => {
  return (
    <footer id='footer'>
      <hr className='w-11/12 mx-auto' />

      <section className='container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8'>
        <div className='col-span-full xl:col-span-2'>
          <a
            rel='noreferrer noopener'
            href='/'
            className='font-bold text-xl flex'
          >
            {/*  <LogoIcon /> */}
            Better Health
          </a>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-lg'>Follow US</h3>
          <div>
            <a
              rel='noreferrer noopener'
              href='https://github.com/devsahilabhidd'
              className='opacity-60 hover:opacity-100'
            >
              Github
            </a>
          </div>

          <div>
            <a
              rel='noreferrer noopener'
              href='https://x.com/AbhinavMalviy58'
              className='opacity-60 hover:opacity-100'
            >
              Twitter
            </a>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-lg'>Platforms</h3>
          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'
            >
              Web
            </a>
          </div>

          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'
            >
              Mobile
            </a>
          </div>

        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-lg'>About</h3>
          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'
            >
              FAQ
            </a>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-lg'>Community</h3>
          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'
            >
              Youtube
            </a>
          </div>

          <div>
            <a
              rel='noreferrer noopener'
              href='https://discord.gg/2uM2he6GGB'
              className='opacity-60 hover:opacity-100'
            >
              Discord
            </a>
          </div>

        </div>
      </section>

      <section className='container pb-14 text-center'>
        <h3>
          &copy; 2024 All rights reserved.{' '}
          <a
            rel='noreferrer noopener'
            target='_blank'
            href='https://www.linkedin.com/in/sahil-quraishi-b40287264/'
            className='text-primary transition-all border-primary hover:border-b-2'
          >
            Wushang Clan
          </a>
        </h3>
      </section>
    </footer>
  );
};
