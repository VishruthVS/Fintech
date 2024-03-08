import React from 'react'
import Link from "next/link";

const Developers = () => {
  return (
    <>
      <Navbar />
      <div>Developer Resources</div>
      <Link href="https://www.matcrypt.live/dev/faucets"><div>Crypto Faucets</div></Link>
      <div>Crypto Endpoints</div>
      <div>
        <div>Valauble Articles</div>
        <p>Zero Knowledge proof</p>
        <iframe src="https://docs.google.com/presentation/d/1gfB6WZMvM9mmDKofFibIgsyYShdf0RV_Y8TLz3k1Ls0/edit#slide=id.p" width="100%" height="500"> </iframe>
        <iframe src="https://ethresear.ch/t/zero-knowledge-proofs-starter-pack/4519" width="100%" height="500"> </iframe>
      </div>

    </>
  )
}

export default Developers