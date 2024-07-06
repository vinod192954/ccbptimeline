import {AiFillClockCircle} from 'react-icons/ai'
import {
  CourseTitleAndDurationContainer,
  CourseTitle,
  DurationContainer,
  Duration,
  CourseDescription,
  CourseTagList,
  CourseTagItem,
  CourseTag,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagList} = courseDetails
  return (
    <>
      <CourseTitleAndDurationContainer>
        <CourseTitle>{courseTitle}</CourseTitle>
        <DurationContainer>
          <AiFillClockCircle color="171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </CourseTitleAndDurationContainer>
      <CourseDescription>{description}</CourseDescription>
      <CourseTagList>
        {tagList.map(eachTag => (
          <CourseTagItem key={eachTag.id}>
            <CourseTag>{eachTag.name}</CourseTag>
          </CourseTagItem>
        ))}
      </CourseTagList>
    </>
  )
}
export default CourseTimelineCard
