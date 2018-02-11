import { connect } from 'react-redux';

import FileSystem from '../components/FileSystem';
import { getFiles, getFileStatus, addFile } from '../redux/modules/fileSystem';

const mapStateToProps = state => ({
  files: getFiles(state),
  fileStatus: getFileStatus(state),
});

export default connect(mapStateToProps, { addFile })(FileSystem);
