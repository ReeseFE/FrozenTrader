import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <Image
                // className={styles.logo}
                src='/light.svg'
                alt='Next.js Logo'
                width={327}
                height={65}
                priority
            />
            <Image
                className={styles.logoBg}
                src='/snowBg.png'
                alt='Next.js Logo'
                width={375}
                height={375}
                priority
            />

            <div className={styles.grid}>
                <a
                    href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                    className={styles.card}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h2>
                        Demo <span>-&gt;</span>
                    </h2>
                    <p>
                        Find in-depth information about Next.js features and
                        API.
                    </p>
                </a>

                <a
                    href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                    className={styles.card}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h2>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p>Explore starter templates for Next.js.</p>
                </a>

                <a
                    href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                    className={styles.card}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h2>
                        Dev <span>-&gt;</span>
                    </h2>
                    <p>
                        Instantly deploy your Next.js site to a shareable URL
                        with Vercel.
                    </p>
                </a>
            </div>
        </main>
    );
}
