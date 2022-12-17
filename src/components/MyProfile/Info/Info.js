import React from "react";
import styles from "./Info.module.css";

const DEFAULT_AVATAR = "https://static.vecteezy.com/system/resources/previews/004/696/485/original/shadow-samurai-warrior-on-sunlight-vector.jpg"

class Info extends React.Component {
  state = {
    editMode: false,
		status: this.props.status
  };

  toggleEditMode = (bool) => {
    this.setState({
      editMode: bool,
    });
  }

	onChangeStatus = (e) => {
		this.setState({
			status: e.target.value
		})
	}

  render() {
    return (
      <div className={styles.info}>
        <div className={styles.ava}>
          <img
            src={this.props.profile.photos.large || DEFAULT_AVATAR}
            alt="ava"
          ></img>
          {!this.state.editMode ? (
            <div onDoubleClick={() => this.toggleEditMode(true)}>
              {this.props.status || "-------"}
            </div>
          ) : (
            <input
              autoFocus={true}
              value={this.state.status}
              onBlur={() => {
								this.props.updateStatus(this.state.status)
                this.toggleEditMode(false);
              }}
							onChange={this.onChangeStatus}
            />
          )}
        </div>
        <div className={styles.description}>
          <h2>{this.props.profile.fullName}</h2>
          <p>{this.props.profile.lookingForAJobDescription}</p>
        </div>
      </div>
    );
  }
}

export default Info;
