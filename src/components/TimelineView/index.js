import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import {
  TimeLineContainer,
  HeaderContainer,
  Heading,
  CCBPHeading,
} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderTimeLineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }
  return (
    <TimeLineContainer>
      <HeaderContainer>
        <Heading>
          MY JOURNEY OF <br />
          <CCBPHeading>CCBP 4.0</CCBPHeading>
        </Heading>
      </HeaderContainer>
      <Chrono
        theme={{
          secondary: 'white',
        }}
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
      >
        {timelineItemsList.map(eachItem => renderTimeLineCard(eachItem))}
      </Chrono>
    </TimeLineContainer>
  )
}
export default TimelineView
