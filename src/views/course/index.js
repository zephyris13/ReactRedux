import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createCourse } from '../../redux/actions/courseActions';

@connect(
  state => ({
    courses: state.get('courses'),
  }),
  {
    createCourse,
  }
)
export default class CoursesPage extends Component {
  static propTypes = {
    courses: PropTypes.object.isRequired,
    createCourse: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: '' }
    };
  }

  onTitleChange(e) {
    const { course } = this.state;
    course.title = e.target.value;
    this.setState({ course: course });
  }

  onClickSave() {
    this.props.createCourse(this.state.course);
    this.setState({ course: { title: '' } });
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    const {
      courses,
    } = this.props;

    const {
      course,
    } = this.state;

    return (
      <div>
        <h1>Courses</h1>
        { courses && courses.get('data') && courses.get('data').map(this.courseRow) }

        <h2>Add Course</h2>
        <input
          type="text"
          onChange={(e) => this.onTitleChange(e)}
          value={course.title} />

        <input
          type="submit"
          value="Save"
          onClick={() => this.onClickSave()} />
      </div>
    );
  }
}
