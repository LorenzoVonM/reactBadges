import React from 'react';

import './styles/BadgeEdit.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';

import api from '../api';


class BadgeEdit extends React.Component {

  state = {
    loading: true,
    error: null,
    form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  }};

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({ loading: true });
      try {
        const data = await api.badges.read(
          this.props.match.params.badgeId
        )
        this.setState({ loading: false, form: data })
      }catch(error) {
      this.setState({ loading: false, error: error })
    }
  }
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      loading:true,
      error:null,
    });
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({
        loading:false,
      });
      console.log(this);
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({
        loading:false,
        error:error,
      });
    }
  }

  render(){
    if (this.state.loading) {
      return <PageLoading />
    }
    return(
      <>
        <div className='BadgeEdit__hero'>
          <img className='BadgeEdit__hero-image img-fluid' src={header} alt='Logo' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge 
                firstName={this.state.form.firstName || 'FIRST_NAME'} 
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                twitter={this.state.form.twitter || 'TWITEER'}
                email={this.state.form.email || 'EMAIL'}
              />
            </div>
            <div className="col-6">
            <h1>EDIT ATTENDANT</h1>
              <BadgeForm 
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BadgeEdit;