import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log("DishDetail Constructor called.....");
  }

  componentDidMount() {
    console.log("DishDetail ComponentDidMount called.....");
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }
  renderComments(comments) {
    if (comments != null)
      return (
        <>
          <h4>Comments</h4>
          <ul class="list-unstyled">
            {comments.map((comment) => (
              <li>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author}{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            ))}
          </ul>
        </>
      );
    else return <div></div>;
  }

  render() {
    console.log("DishDetail render called.....");
    console.log(this.props.dish);

    return (
      this.props.dish != null && (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComments(this.props.dish.comments)}
            </div>
          </div>
        </div>
      )
    );
  }
}

export default DishDetail;
