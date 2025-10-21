import styles from './schedule.module.scss';

import ContentBlock from '../components/ContentBlock.jsx';

function Schedule() {
    return <>
        <ContentBlock mt="25" mb="25" content={<>
            <h1 className="display-1">Schedule Page</h1>
        </>} />
    </>;
}

export default Schedule;