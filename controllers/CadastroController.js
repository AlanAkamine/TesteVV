const { response } = require("express");
const { v4: uuid } = require("uuid");
const Cadastro = require("../models/Cadastro");

module.exports = {
    async index(req, res) {

        res.render('cadastro')

        try {
            const cadastros = await Cadastro.find();
            return res.status(200).json({ cadastros });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async store(req, res) {
        const { title, link } = req.body;

        if (!title || !link) {
            return res.status(400).json({ error: "Missing E-mail or phone." });
        }

        const cadastro = new Cadastro({
            _id: uuid(),
            title,
            link,
            liked: false,
        });

        try {
            await cadastro.save();

            return res.status(201).json({ message: "Cadastro adicionado!" });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async update(req, res) {
        const { title, link } = req.body;

        if (!title && !link) {
            return res
            .status(400)
            .json({ error: "You must inform a new title or a new link" });
        }

        if(title) res.cadastro.title = title;
        if(link) res.cadastro.link = link;

        try {
            await res.cadastro.save()
            return res.status(200).json({ message: "Cadastro updated succesfully!" });
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    },

    /*async delete(req, res) {
        try {
            await res.cadastro.remove();
            return res.status(200).json({ message: "Cadastro removed succesfully!" });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },*/

    /*async updateLike(req, res) {
        res.video.liked = !res.video.liked;

        try {
        await res.video.save()
        
        return res.status(200).json({
            message: `Video ${
            res.video.liked ? "liked" : "unliked"
            } sucessfully!`,
        });
        } catch (err) {
        res.status(400).json({ error: err.message })
        }
    },*/
};
