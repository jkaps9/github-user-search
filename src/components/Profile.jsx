import styles from "./Profile.module.css";
import locationIcon from "../assets/icons/icon-location.svg";
import twitterIcon from "../assets/icons/icon-twitter.svg";
import websiteIcon from "../assets/icons/icon-website.svg";
import companyIcon from "../assets/icons/icon-company.svg";

export default function Profile({ userData }) {
  const createdDate = new Date(userData.created_at);

  return (
    <div className={styles.profileCard}>
      <div className={styles.profileImage}></div>
      <div className={styles.profileHeader}>
        <div>
          <h2 id="displayName">{userData.name}</h2>
          <p id="userName" className="accent-text">
            @{userData.login}
          </p>
        </div>
        <p id="joinDate">
          Joined{" "}
          {createdDate.toLocaleString("en-us", {
            dateStyle: "medium",
          })}
        </p>
      </div>
      <div className={styles.profileDetails}>
        <p id="bio" className={styles.notAvailable}>
          {userData.bio || "This profile has no bio"}
        </p>
        <div className={styles.profileStats}>
          <ul className={styles.profileListStats}>
            <li>
              <p className={styles.statKey}>Repos</p>
              <p className={styles.statValue}>{userData.public_repos}</p>
            </li>
            <li>
              <p className={styles.statKey}>Followers</p>
              <p className={styles.statValue}>{userData.followers}</p>
            </li>
            <li>
              <p className={styles.statKey}>Following</p>
              <p className={styles.statValue}>{userData.following}</p>
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
              <p className={styles.link}>
                {userData.location || "Not Available"}
              </p>
            </li>
            <li className={`${styles.profileListRow} ${styles.notAvailable}`}>
              <img
                src={twitterIcon}
                alt=""
                aria-hidden="true"
                className={styles.linkIcon}
              />
              <a href="/" className={styles.link}>
                {userData.twitter_username || "Not Available"}
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
                {userData.blog || "Not Available"}
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
                {userData.company || "Not Available"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
