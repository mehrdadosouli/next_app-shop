import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['fakestoreapi.com','i.imgur.com'],
      },
};

export default withFlowbiteReact(nextConfig);