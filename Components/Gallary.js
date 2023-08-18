import styles from "../styles/Gallary.module.css";

const Gallary = () => {
  return (
    <>
      <div className={styles.gallary}>
        <hr />
        <h2>Our Gallary</h2>
        <div className={styles.grid_wrapper}>
          <div>
            <img
              src="/Images/img1.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              src="/Images/img2.jpeg"
              alt=""
            />
          </div>
          <div className={styles.tall}>
            <img
              src="/Images/img8.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              src="/Images/img3.jpeg"
              alt=""
            />
          </div>
          <div className={styles.tall}>
            <img
              src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/5998240/pexels-photo-5998240.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className={styles.wide}>
            <img
              src="https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          {/* <div className={styles.big}>
            <img
              src="https://images.unsplash.com/photo-1572914857229-37bf6ee8101c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
              alt=""
            />
          </div> */}
          <div className={styles.tall}>
            <img
              src="https://images.pexels.com/photos/1586145/pexels-photo-1586145.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1588414734732-660b07304ddb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1588224575346-501f5880ef29?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1586145/pexels-photo-1586145.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          {/* <div>
            <img
              src="https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1353&amp;q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1587897773780-fe72528d5081?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1489&amp;q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1587572236558-a3751c6d42c0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
              alt=""
            />
          </div>
          <div className={styles.wide}>
            <img
              src="https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div> */}
        </div>
        <section className={styles.social_media}>
          <hr />
          <p>Follow us on social media</p>
          <h1>
            Stay up to date with the latest news, announcements and events.
          </h1>
          <section className={styles.social}>
            <div className={styles.link}>
              <hr />
              <section className={styles.inner_link}>
                <a href="https://www.instagram.com/storiesarabia/?hl=en" target="_blank">
                  Instagram
                </a>
              </section>
            </div>
            <div className={styles.link}>
              <hr />
              <section className={styles.inner_link}>
                <a href="https://www.facebook.com/storiesarabia/" target="_blank">Facebook</a>
              </section>
            </div>
            <div className={styles.link}>
              <hr />
              <section className={styles.inner_link}>
                <a href="https://twitter.com/storiesarabia?lang=en" target="_blank">Twitter</a>
              </section>
            </div>
            <div className={styles.link}>
              <hr />
              <section className={styles.inner_link}>
                <a href="https://www.linkedin.com/company/storiesarabia/" target="_blank">
                  Linkedin
                </a>
              </section>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Gallary;
