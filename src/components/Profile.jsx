import styles from "./Profile.module.css";
import locationIcon from "../assets/icons/icon-location.svg";
import twitterIcon from "../assets/icons/icon-twitter.svg";
import websiteIcon from "../assets/icons/icon-website.svg";
import companyIcon from "../assets/icons/icon-company.svg";

export default function Profile({ userData }) {
  const createdDate = userData ? new Date(userData.created_at) : new Date();

  if (!userData) return null;

  return (
    <div className={`card ${styles.profileCard}`}>
      <div className={styles.profileImage}>
        <img
          src={userData.avatar_url}
          alt={`${userData.login || "user"} avatar`}
        />
      </div>
      <div className={styles.profileHeader}>
        <div>
          {userData.name ? (
            <h2>{userData.name}</h2>
          ) : (
            <h2 className={styles.notAvailable}>Anonymous</h2>
          )}
          <p className="accent-text">@{userData.login}</p>
        </div>
        <p>
          Joined{" "}
          {createdDate.toLocaleString("en-us", {
            dateStyle: "medium",
          })}
        </p>
      </div>
      <div className={styles.profileDetails}>
        <p className={!userData.bio ? styles.notAvailable : undefined}>
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
            <li
              className={`${styles.profileListRow} ${!userData.location ? styles.notAvailable : undefined}`}
            >
              <img
                src={locationIcon}
                alt=""
                aria-hidden="true"
                className={styles.linkIcon}
              />
              {userData.location ? (
                <span>{userData.location}</span>
              ) : (
                <span className={styles.notAvailable}>Not Available</span>
              )}
            </li>
            <li
              className={`${styles.profileListRow} ${!userData.twitter_username ? styles.notAvailable : undefined}`}
            >
              <img
                src={twitterIcon}
                alt=""
                aria-hidden="true"
                className={styles.linkIcon}
              />
              {userData.twitter_username ? (
                <a
                  href={`https://twitter.com/${userData.twitter_username}`}
                  className={styles.link}
                >
                  {userData.twitter_username}
                </a>
              ) : (
                <span className={styles.notAvailable}>Not Available</span>
              )}
            </li>
            <li
              className={`${styles.profileListRow} ${!userData.blog ? styles.notAvailable : undefined}`}
            >
              <img
                src={websiteIcon}
                alt=""
                aria-hidden="true"
                className={styles.linkIcon}
              />
              {userData.blog ? (
                <a href={userData.blog} className={styles.link}>
                  {userData.blog}
                </a>
              ) : (
                <span className={styles.notAvailable}>Not Available</span>
              )}
            </li>
            <li
              className={`${styles.profileListRow} ${!userData.company ? styles.notAvailable : undefined}`}
            >
              <img
                src={companyIcon}
                alt=""
                aria-hidden="true"
                className={styles.linkIcon}
              />
              {userData.company ? (
                <span>{userData.company}</span>
              ) : (
                <span className={styles.notAvailable}>Not Available</span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
