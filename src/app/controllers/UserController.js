class UserController {
  async index(req, res) {
    res.send("welcome to index");
  }

  async login(req, res) {
    res.send("under development");
  }

  async create(req, res) {
    res.send("under development");
  }

  async logout(req, res) {
    res.send("under development");
  }

  async getProfile(req, res) {
    res.send("under development");
  }

  async editProfile(req, res) {
    res.send("under development");
  }

  async getDonationHistory(req, res) {
    res.send("under development");
  }

  async verifyOtp(req, res) {
    res.send("under development");
  }
}

export default new UserController();
