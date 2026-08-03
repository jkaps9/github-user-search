import styles from "./Profile.module.css";
import locationIcon from "../assets/icons/icon-location.svg";
import twitterIcon from "../assets/icons/icon-twitter.svg";
import websiteIcon from "../assets/icons/icon-website.svg";
import companyIcon from "../assets/icons/icon-company.svg";

export default function Profile() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileImage}></div>
      <div className={styles.profileHeader}>
        <div>
          <h2 id="displayName">The Octocat</h2>
          <p id="userName" className="accent-text">
            @octocat
          </p>
        </div>
        <p id="joinDate">Joined 25 Jan 2011</p>
      </div>
      <div className={styles.profileDetails}>
        <p id="bio" className={styles.notAvailable}>
          This profile has no bio
        </p>
        <div className={styles.profileStats}>
          <ul className={styles.profileListStats}>
            <li>
              <p className={styles.statKey}>Repos</p>
              <p className={styles.statValue}>8</p>
            </li>
            <li>
              <p className={styles.statKey}>Followers</p>
              <p className={styles.statValue}>3938</p>
            </li>
            <li>
              <p className={styles.statKey}>Following</p>
              <p className={styles.statValue}>9</p>
            </li>
          </ul>
        </div>
        <div className={styles.profileLinks}>
          <ul className={styles.profileListLinks}>
            <li className={styles.profileListRow}>
              <img
                src={locationIcon}
                alt=""
                aria-hidden="true"
                className={styles.linkIcon}
              />
              <p className={styles.link}>San Francisco</p>
            </li>
            <li className={`${styles.profileListRow} ${styles.notAvailable}`}>
              <img
                src={twitterIcon}
                alt=""
                aria-hidden="true"
                className={styles.linkIcon}
              />
              <a href="/" className={styles.link}>
                Not Available
              </a>
            </li>
            <li className={styles.profileListRow}>
              <img
                src={websiteIcon}
                alt=""
                aria-hidden="true"
                className={styles.linkIcon}
              />
              <a href="/" className={styles.link}>
                https://github.blog
              </a>
            </li>
            <li className={styles.profileListRow}>
              <img
                src={companyIcon}
                alt=""
                aria-hidden="true"
                className={styles.linkIcon}
              />
              <a href="/" className={styles.link}>
                @github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
